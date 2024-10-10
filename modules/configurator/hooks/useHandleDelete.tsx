// useHandleDelete.tsx
import { useRouter } from 'next/router';
import { getAuth } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../lib/firebaseConfig'; 
import { toast } from 'react-toastify';

const useHandleDelete = (configId: string) => {
    const router = useRouter();

    const handleDelete = async () => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
            try {
                const userDocRef = doc(db, 'users', user.uid);
                
                const userDoc = await getDoc(userDocRef);
                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    const savedConfigurations = userData.savedConfigurations || [];
                    const updatedConfigurations = savedConfigurations.filter(
                        (config: any) => String(config.id) !== String(configId)
                    );
                    
                    if (updatedConfigurations.length !== savedConfigurations.length) {
                        await updateDoc(userDocRef, {
                            savedConfigurations: updatedConfigurations
                        });

                        console.log('Configuration deleted successfully');
                        toast.success(
                            <div className="flex gap-4 items-center">
                                <strong className="text-xs font-bold p-3">SUCCESS</strong>
                                <div className="text-xs">Configuration deleted successfully.</div>
                            </div>,
                            {
                                closeButton: ({ closeToast }) => (
                                    <button className="custom-close-button" onClick={closeToast}>
                                        &#10006;
                                    </button>
                                ),
                            }
                        );

                        setTimeout(() => {
                            if (router.pathname === '/home') {
                                router.reload(); 
                            } else {
                                router.push('/home'); 
                            }
                        }, 1000);
                    } else {
                        console.log('Configuration cannot be deleted');
                        toast.error(
                            <div className="flex gap-4 items-center">
                                <strong className="text-xs font-bold p-3">ERROR</strong>
                                <div className="text-xs">Cannot delete default configuration.</div>
                            </div>,
                            {
                                closeButton: ({ closeToast }) => (
                                    <button className="custom-close-button" onClick={closeToast}>
                                        &#10006;
                                    </button>
                                ),
                            }
                        );
                    }
                } else {
                    console.error('User document does not exist');
                }
            } catch (error) {
                console.error('Error deleting configuration: ', error);
            }
        } else {
            console.error('No user is logged in');
        }
    };

    return { handleDelete };
};

export default useHandleDelete;
