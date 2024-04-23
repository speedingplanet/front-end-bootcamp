import React from 'react';
import Navbar from './Navbar';
import './zippay.css';
import ProtoPaymentsGrid from './ProtoPaymentsGrid';
import PaymentsGrid from './payments-grid/PaymentsGrid';

function ZipPayManager() {
	return (
		<section className="zippay-main">
			<Navbar></Navbar>
			{/* <ProtoPaymentsGrid /> */}
			<PaymentsGrid />
		</section>
	);
}

export default ZipPayManager;
