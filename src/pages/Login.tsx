import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import { useIonRouter } from '@ionic/react';
import { IonAlert, IonButton, IonContent, IonInput, IonPage, IonToast } from '@ionic/react';

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

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const doLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setAlertMessage(error.message);
      setShowAlert(true);
      return;
    }

    setShowToast(true);
    setTimeout(() => {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 300);
  };

  return (
    <IonPage>
      <IonContent className="p-4">
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-900 via-green-700 to-green-600">
          {/* Form wrapper with border */}
          <div className="w-full max-w-md p-8 border-4 border-yellow-500 rounded-lg shadow-lg bg-black bg-opacity-60">
            <div className="flex justify-center">
              <div className="w-40 h-40 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-r from-green-400 to-yellow-500">
                <img
                  src="https://i.pinimg.com/originals/fe/7a/92/fe7a922b5b296ac092f25e709772b3d7.gif" 
                  alt="Logo"
                  className="w-35 h-35 rounded-full "
                />  
              </div>
            </div>

            <h1 className="mt-6 text-3xl font-bold text-yellow-400 text-center">Loki's Login</h1>

            {/* Email Input */}
            <div className="mt-6 w-full">
              <label htmlFor="email" className="block text-lg font-medium text-white">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full px-6 py-3 border border-yellow-500 rounded-lg text-black bg-grey placeholder-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Password Input */}
            <div className="mt-6 w-full">
              <label htmlFor="password" className="block text-lg font-medium text-white">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full px-6 py-3 border border-yellow-500 rounded-lg text-black bg-grey placeholder-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Login Button */}
            <IonButton
              onClick={doLogin}
              expand="full"
              shape="round"
              className="mt-8 bg-yellow-500 text-black rounded-lg py-3 hover:bg-yellow-600 hover:scale-105 transform transition-all duration-300"
            >
              Login
            </IonButton>

            {/* Register Link Button */}
            <IonButton
              routerLink="/it35-lab/Signup"
              expand="full"
              fill="clear"
              shape="round"
              className="mt-4 text-yellow-400 hover:text-yellow-500"
            >
              Don't have an account? Register here
            </IonButton>
          </div>
        </div>

        {/* Reusable AlertBox Component */}
        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />

        {/* IonToast for success message */}
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Login successful! Redirecting..."
          duration={1500}
          position="top"
          color="primary"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
