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
  const Signup: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useIonRouter();
    const [showToast, setshowToast] = useState(false);
    const doLogs = () => {
      setshowToast(true)
      setTimeout (() => {
        navigation.push('/it35-lab/','forward','replace');
    }, 1000);
  }
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
                        <IonItem>
                          <IonLabel position="floating">Confirm Password</IonLabel>
                          <IonInput 
                            type="password" 
                            value={password} 
                            onIonChange={e => setPassword(e.detail.value!)} 
                            required 
                          />
                        </IonItem>
                        <IonButton  onClick={() => doLogs()} id="open-toast" >Register</IonButton>
                         <IonToast
                            isOpen = {showToast}
                            onDidDismiss={() => setshowToast (false)}
                            trigger="open-toast"
                            duration={1000}
                            message="Register Successfully, Redirectering..."
                            position= "top"
                         ></IonToast>
                          {/* <IonButton onClick = {() => doLogin ()}> Register </IonButton> */}
                         </IonCardContent>
                      </IonCard>   
        </IonContent>
      </IonPage>
    );
  };
  
  export default Signup;