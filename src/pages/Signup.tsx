import { 
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent, 
  IonHeader, 
  IonInput, 
  IonItem, 
  IonLabel, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToast, 
  IonToolbar,
  useIonRouter
} from '@ionic/react';
import { useState } from "react";

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useIonRouter();
  const [showToast, setShowToast] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
      setModalIsOpen(true);
  };

  const closeModal = () => {
      setModalIsOpen(false);
  };

  const handleContinue = () => {
      // Logic to continue account creation
      console.log("User  chose to continue creating an account.");
      setShowToast(true);
      setTimeout(() => {
          navigation.push('/it35-lab/', 'forward', 'replace');
      }, 1000);
      closeModal();
  };

  const handleCancel = () => {
      console.log("User  chose to cancel account creation.");
      closeModal();
  };

  return (
      <IonPage>
          <IonHeader>
              <IonToolbar>
                  <IonButtons slot='start'>
                      <IonMenuButton></IonMenuButton>
                  </IonButtons>
                  <IonTitle>Register</IonTitle>
              </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
              <IonCard style={{ width: 'full', maxWidth: 'full', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                  <IonCardContent>
                      <IonItem>
                          <IonLabel position="floating">Email</IonLabel>
                          <IonInput 
                              type="email" 
                              value={email} 
                              onIonChange={e => setEmail(e.detail.value!)} 
                              required 
                          />
                      </IonItem>
                      <IonItem>
                          <IonLabel position="floating">Password</IonLabel>
                          <IonInput 
                              type="password" 
                              value={password} 
                              onIonChange={e => setPassword(e.detail.value!)} 
                              required 
                          />
                      </IonItem>
                      <IonItem>
                          <IonLabel position="floating">Confirm Password</IonLabel>
                          <IonInput 
                              type="password" 
                              value={confirmPassword} 
                              onIonChange={e => setConfirmPassword(e.detail.value!)} 
                              required 
                          />
                      </IonItem>
                      <IonButton onClick={openModal}>Create New Account</IonButton>

                      {/* Modal for confirmation */}
                      {modalIsOpen && (
                          <div className="modal">
                              <h2>Continue Creating Account?</h2>
                              <p>Are you sure you want to continue creating a new account?</p>
                              <IonButton onClick={handleContinue}>Yes, Continue</IonButton>
                              <IonButton onClick={handleCancel}>No, Cancel</IonButton>
                          </div>
                      )}

                      <IonToast
                          isOpen={showToast}
                          onDidDismiss={() => setShowToast(false)}
                          duration={1000}
                          message="Register Successfully, Redirecting..."
                          position="top"
                      />
                  </IonCardContent>
              </IonCard>
          </IonContent>
      </IonPage>
  );
};

export default Signup;