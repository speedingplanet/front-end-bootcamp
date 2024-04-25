import React from 'react';
import Navbar from './Navbar';
import './zippay.css';
import PaymentsGrid from './payments-grid/PaymentsGrid';
import { Route, Routes } from 'react-router-dom';
import SendReceive from './SendReceive';
import SplitBill from './SplitBill';
import AccountSettings from './AccountSettings';
import ZipPaySearch from './ZipPaySearch';
import UserDetailsRouter from './UserDetailsRouter';

function ZipPayManager() {
	return (
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
	);
}

export default ZipPayManager;
