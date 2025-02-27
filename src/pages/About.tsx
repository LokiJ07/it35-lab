import { 
    IonButtons,
      IonContent, 
      IonHeader, 
      IonItem, 
      IonLabel, 
      IonList, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';
  
  const About: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>About</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen color = "light">
        <IonList inset={true}>
        <IonItem>
          <IonLabel>Contact Number <p>09264686830</p></IonLabel>         
        </IonItem>
        <IonItem>
          <IonLabel>Facebook Account <p>Louie Jay Laspoña</p></IonLabel>   
        </IonItem>
        <IonItem>
          <IonLabel>Email <p>louizkylaspona@gmail.com</p></IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Github Account  <p>LoKiJ07</p></IonLabel>        
        </IonItem>
        <IonItem>
          <IonLabel>Twitter <p>Chucks07</p></IonLabel>          
        </IonItem>
      </IonList>
        </IonContent>
      </IonPage>
    );
  };
  
  export default About;