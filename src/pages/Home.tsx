import { IonButton, IonButtons, IonContent, IonHeader, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useRef } from 'react';

const Home: React.FC = () => {
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
          <IonContent>
            <ExploreContainer />
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;