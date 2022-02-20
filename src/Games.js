import { useState } from 'react'
import {gameData} from './Data'


function Game(){
    // const {id, img, title, price, desc} = data
    const [info, setInfo] = useState(true);
    const [game, setGame] = useState(gameData);
    document.body.style = `background:aliceblue ;`;

    const removeGame = (id) =>{
        const newGame = game.filter((item) => item.id !== id)
        setGame(newGame)
    }
    


    if(game.length === 0){
        return(
            <main className='game'>
                <h1 className='game-heading'>No Games Left</h1><div className="underline"></div>
                <button className='refresh' onClick={()=> window.location.reload(false)}>Refresh</button>
            </main>  
        );
    }

    return (
        <main>
            <h1 className='game-heading'>Games List</h1><div className="underline"></div>
            
                {game.map((item) =>{
                    const { id, img, title, price, desc } = item;

                    return(
                        <section className="game-container" key={id}>
                            <div className="img-container">
                                <img src={img} alt={title} />
                            </div>

                            <div className="info-container">
                                <header className="title">
                                    <h3>{title}</h3>
                                    <h3>Rs.{price}</h3>
                                </header>
                                <p>{info?desc.substring(0,190):desc}
                                <button className="see-more" onClick={() => setInfo(!info)}>
                                    {info?'...show more':'show less'}
                                </button>
                                </p>
                                <button className="remove" onClick={()=> removeGame(id)}>Remove</button>
                            </div>

                        </section>
                        
                    );
                })}
            
        </main>
    )

}

export default Game;