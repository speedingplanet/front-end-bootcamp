import React from 'react';
import Navbar from './Navbar';
import './zippay.css';
import PaymentsGrid from './payments-grid/PaymentsGrid';
import { Route, Routes } from 'react-router-dom';
import SendReceive from './SendReceive';

function ZipPayManager() {
	return (
		<section className="zippay-main">
			<Navbar></Navbar>
			<Routes>
				<Route
					path="payments-grid"
					element={<PaymentsGrid />}
				/>
				<Route
					path="send-receive"
					element={<SendReceive />}
				/>
			</Routes>
		</section>
	);
}

export default ZipPayManager;
