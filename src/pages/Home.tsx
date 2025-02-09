import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useRef } from 'react';

const Home: React.FC = () => {
  // ionic modal
  const modal = useRef<HTMLIonModalElement>(null);

  const dismiss = () => {

    if (modal.current) {
      modal.current.dismiss();
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Modal Navigation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton id="openModal" onClick={() => modal.current?.present()}>Open Modal</IonButton>
        <IonModal ref={modal} onDidDismiss={dismiss}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Modal</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={dismiss}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          {/* ExploreContainer */}
          <IonContent>
            <ExploreContainer />
          </IonContent>
     <IonCard>
      <IonCardHeader>
        <IonCardTitle>MySelf</IonCardTitle>
        <IonCardSubtitle>Louie Jay Laspoña</IonCardSubtitle>
      </IonCardHeader>
        <IonCardContent>I Think I'm Funny!!</IonCardContent>
    </IonCard>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;