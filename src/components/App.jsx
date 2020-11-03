import React from 'react';
import { ContactsProvider } from '../contexts/ContactsProvider';
import { ConversationsProvider } from '../contexts/ConversationsProvider';
import { SocketProvider } from '../contexts/SocketProvider';
import useLocalStorage from '../hooks/useLocalStorage';
import Dashborad from './Dashborad';
import Login from './Login';

function App() {
	const [id, setId] = useLocalStorage('id');

	const dashboard = (
		<SocketProvider id={id}>
			<ContactsProvider>
				<ConversationsProvider id={id}>
					<Dashborad id={id} />
				</ConversationsProvider>
			</ContactsProvider>
		</SocketProvider>
	);

	return id ? dashboard : <Login onIdSubmit={setId} />;
}

export default App;
