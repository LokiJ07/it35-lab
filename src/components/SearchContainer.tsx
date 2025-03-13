import { IonCard, IonCardHeader, IonSearchbar } from "@ionic/react";
import { useState } from "react";

interface ContainerProps {}

const feed = [
    {
        "id":'1',
        "title":'Ionitron',
    },
    {
        "id":'2',
        "title":'Cortana',
    },
    {
        "id":'3',
        "title":'Bender',
    },
    {
        "id":'4',
        "title":'BB-8',
    },
    {
        "id":'5',
        "title":'Wall-E',
    },
    {
        "id":'6',
        "title":'Rick Astley',
    },
    {
        "id":'6',
        "title":'Leeroy Jenkins',
    },
]

function SearchContainer() {  
    const [results, setResults] = useState([...feed]);

    const handleInput = (event: CustomEvent) => {
        const query = event.detail.value?.toLowerCase () || "";
        setResults(feed.filter((d)=> d.title.toLowerCase().includes(query)));
    };
return (
    <div id="container">
        <IonSearchbar debounce={90} onIonInput={handleInput}>{}</IonSearchbar>

        {results.map((item)=>(
            <IonCard key={item.id}>
                  <IonCardHeader>{item.title}</IonCardHeader>
            </IonCard>
        ))}
    </div>
   
);
};

export default SearchContainer;