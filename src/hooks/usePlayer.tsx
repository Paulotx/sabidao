import { createContext, useState, ReactNode, useContext } from 'react';

interface PlayersContextProps {
    children: ReactNode
}

interface PlayersContextData {
    player: string;
    createPlayer: (name: string) => Promise<void>;
}

const PlayerContext = createContext<PlayersContextData>({} as PlayersContextData);

export function PlayersProvider({ children }: PlayersContextProps) {
    const [player, setPlayer] = useState('')

    async function createPlayer(name: string) {
        setPlayer(name)
    }

    return (
        <PlayerContext.Provider value={{ player, createPlayer }}>
            {children}
        </PlayerContext.Provider>
    );
}

export function usePlayers() {
    const context = useContext(PlayerContext);

    return context;
}