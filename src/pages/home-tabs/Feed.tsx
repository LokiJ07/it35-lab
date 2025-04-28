import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';
import FeedContainer from '../../components/FeedContainer';

const Feed: React.FC = () => {
  return (
    <IonPage className="bg-gray-900">
      <IonHeader className="bg-gray-800">
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton className="text-yellow-400"></IonMenuButton>
          </IonButtons>
          <IonTitle className="text-yellow-400">Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="bg-gray-900 text-gray-200">
        <FeedContainer />
      </IonContent>
    </IonPage>
  );
};

export default Feed;