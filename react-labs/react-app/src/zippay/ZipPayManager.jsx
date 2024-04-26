import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Navbar from './Navbar';
import './zippay.css';
import PaymentsGrid from './payments-grid/PaymentsGrid';
import SendReceive from './SendReceive';
import SplitBill from './SplitBill';
import AccountSettings from './AccountSettings';
import ZipPaySearch from './ZipPaySearch';
import UserDetailsRouter from './UserDetailsRouter';

function ZipPayManager() {
	return (
		<Provider store={store}>
			<section className="zippay-main">
				<Navbar></Navbar>
				<Routes>
					<Route
						path="send-receive"
						element={<SendReceive />}
					/>
					<Route
						path="split-the-bill"
						element={<SplitBill />}
					/>
					<Route
						path="payments-grid"
						element={<PaymentsGrid />}
					/>
					<Route
						path="account-settings"
						element={<AccountSettings />}
					/>
					<Route
						path="search"
						element={<ZipPaySearch />}
					/>
					<Route
						path="user/:userId"
						element={<UserDetailsRouter />}
					/>
				</Routes>
			</section>
		</Provider>
	);
}

export default ZipPayManager;
