import React, { useState } from 'react';
import { IonButton, IonContent, IonInput, IonPage, IonModal, IonText, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAlert, IonInputPasswordToggle, IonTitle } from '@ionic/react';
import { supabase } from '../utils/supabaseClient';
import bcrypt from 'bcryptjs';

// Reusable Alert Component
const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({ message, isOpen, onClose }) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onClose}
      header="Notification"
      message={message}
      buttons={['OK']}
    />
  );
};

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleOpenVerificationModal = () => {

    if (password !== confirmPassword) {
      setAlertMessage("Passwords do not match.");
      setShowAlert(true);
      return;
    }

    setShowVerificationModal(true);
  };

  const doRegister = async () => {
    setShowVerificationModal(false);

    try {
      // Sign up in Supabase authentication
      const { data, error } = await supabase.auth.signUp({ email, password });

      if (error) {
        throw new Error("Account creation failed: " + error.message);
      }

      // Hash password before storing in the database
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Insert user data into 'users' table
      const { error: insertError } = await supabase.from("users").insert([{
        username,
        user_email: email,
        user_firstname: firstName,
        user_lastname: lastName,
        user_password: hashedPassword,
      }]);

      if (insertError) {
        throw new Error("Failed to save user data: " + insertError.message);
      }

      setShowSuccessModal(true);
    } catch (err) {
      if (err instanceof Error) {
        setAlertMessage(err.message);
      } else {
        setAlertMessage("An unknown error occurred.");
      }
      setShowAlert(true);
    }
  };

  return (
    <IonPage>
      <IonContent className="p-4">
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-900 via-green-700 to-green-600">
          {/* Form wrapper with border */}
          <div className="w-full max-w-md p-8 border-4 border-yellow-500 rounded-lg shadow-lg bg-black bg-opacity-60">
            <div className="flex justify-center">
              <div className="w-36 h-36 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-r from-green-400 to-yellow-500">
                <img
                  src="https://cdn-icons-gif.flaticon.com/18113/18113654.gif" // Loki-inspired animated logo
                  alt="Logo"
                  className="w-24 h-24"
                />
              </div>
            </div>

            <h1 className="mt-6 text-3xl font-bold text-yellow-400 text-center">Loki's Registration</h1>

            {/* Form Inputs with White Background */}
            <IonInput
              
              labelPlacement="stacked"
              fill="outline"
              type="text"
              placeholder="Enter a unique username"
              value={username}
              onIonChange={(e) => setUsername(e.detail.value!)}
              className="mt-6 w-full px-6 py-3 text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <IonInput
              
              labelPlacement="stacked"
              fill="outline"
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onIonChange={(e) => setFirstName(e.detail.value!)}
              className="mt-6 w-full px-6 py-3 text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <IonInput
            
              labelPlacement="stacked"
              fill="outline"
              type="text"
              placeholder="Enter your last name"
              value={lastName}
              onIonChange={(e) => setLastName(e.detail.value!)}
              className="mt-6 w-full px-6 py-3 text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <IonInput
            
              labelPlacement="stacked"
              fill="outline"
              type="email"
              placeholder="Input any Email"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value!)}
              className="mt-6 w-full px-6 py-3 text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <IonInput
            
              labelPlacement="stacked"
              fill="outline"
              type="password"
              placeholder="Enter password"
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
              className="mt-6 w-full px-6 py-3 text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <IonInputPasswordToggle slot="end" />
            </IonInput>
            <IonInput
             
              labelPlacement="stacked"
              fill="outline"
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onIonChange={(e) => setConfirmPassword(e.detail.value!)}
              className="mt-6 w-full px-6 py-3 text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <IonInputPasswordToggle slot="end" />
            </IonInput>

            {/* Register Button */}
            <IonButton
              onClick={handleOpenVerificationModal}
              expand="full"
              shape="round"
              className="mt-8 bg-yellow-500 text-black rounded-lg py-3 hover:bg-yellow-600 hover:scale-105 transform transition-all duration-300"
            >
              Register
            </IonButton>

            {/* Already have an account? Link */}
            <IonButton
              routerLink="/it35-lab"
              expand="full"
              fill="clear"
              shape="round"
              className="mt-4 text-yellow-400 hover:text-yellow-500"
            >
              Already have an account? Sign in
            </IonButton>
          </div>
        </div>

        {/* Verification Modal */}
        <IonModal isOpen={showVerificationModal} onDidDismiss={() => setShowVerificationModal(false)}>
          <IonContent className="ion-padding">
            <IonCard className="ion-padding" style={{ marginTop: '25%' }}>
              <IonCardHeader>
                <IonCardTitle>User Registration Details</IonCardTitle>
                <hr />
                <IonCardSubtitle>Username</IonCardSubtitle>
                <IonCardTitle>{username}</IonCardTitle>

                <IonCardSubtitle>Email</IonCardSubtitle>
                <IonCardTitle>{email}</IonCardTitle>

                <IonCardSubtitle>Name</IonCardSubtitle>
                <IonCardTitle>{firstName} {lastName}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent></IonCardContent>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '5px' }}>
                <IonButton fill="clear" onClick={() => setShowVerificationModal(false)}>Cancel</IonButton>
                <IonButton color="primary" onClick={doRegister}>Confirm</IonButton>
              </div>
            </IonCard>
          </IonContent>
        </IonModal>

        {/* Success Modal */}
        <IonModal isOpen={showSuccessModal} onDidDismiss={() => setShowSuccessModal(false)}>
          <IonContent className="ion-padding" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center', marginTop: '35%' }}>
            <IonTitle style={{ marginTop: '35%' }}>Registration Successful 🎉</IonTitle>
            <IonText>
              <p>Your account has been created successfully.</p>
              <p>Please check your email address.</p>
            </IonText>
            <IonButton routerLink="/it35-lab" routerDirection="back" color="primary">
              Go to Login
            </IonButton>
          </IonContent>
        </IonModal>

        {/* Reusable AlertBox Component */}
        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />
      </IonContent>
    </IonPage>
  );
};

export default Signup;
