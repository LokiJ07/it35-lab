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
  import {useState} from "react";
  const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useIonRouter();
    const [showToast, setshowToast] = useState(false);
    const doLogin = () => {
      setshowToast(true)
      setTimeout (() => {
        navigation.push('/it35-lab/app','forward','replace');
    }, 1000);
  }
    const doRegister = () => {
      navigation.push('/it35-lab/Signup','forward','replace')
    }
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className='ion-padding'  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <IonCard style={{ width: 'full', maxWidth: 'full', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
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
            <IonButton  onClick={() => doLogin()} id="open-toast" >Login</IonButton>
             <IonToast
                isOpen = {showToast}
                onDidDismiss={() => setshowToast (false)}
                trigger="open-toast"
                duration={1000}
                message="Login Successfully, Redirectering..."
                position= "top"
             ></IonToast>
              <IonButton onClick = {() => doRegister ()}> Register </IonButton>
             </IonCardContent>
          </IonCard>   
        </IonContent>
      </IonPage>
    );
  };
  
  export default Login;