import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonAvatar, IonTextarea, IonButton, IonIcon, IonFooter, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import { camera, search, heartOutline, personCircleOutline, heartCircleOutline, heartCircleSharp } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Instagram</IonTitle>
          <IonButton slot="end">
            <IonIcon icon={camera} />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonCard className="post-card">
            <IonItem>
              <IonAvatar slot="start">
                <img alt="Silhouette of mountains" id="profile_pic" src="../src/assets/hanny.jpg" />
              </IonAvatar>
              <IonTextarea className="post-input" autoGrow placeholder="What's on your mind?" />
            </IonItem>
            <IonCardContent>
                 <img alt="Sunset" src="../src/assets/sunset.jpeg" />
                 <img alt="Sun" src="../src/assets/sun.avif" />
                <p style={{ fontSize: '30px' }}>"I can count on my fingers the number of sunsets I have left, and I don't want to miss any of them."</p>
            </IonCardContent>
            <IonButton>
              <IonIcon icon={heartCircleSharp} />
            </IonButton>

          </IonCard>
          {/* Add more cards for additional posts */}
        </IonList>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton>
            <IonIcon icon={search} />
          </IonButton>
          <IonButton>
            <IonIcon icon={heartOutline} />
          </IonButton>
          <IonButton>
            <IonIcon icon={personCircleOutline} />
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
