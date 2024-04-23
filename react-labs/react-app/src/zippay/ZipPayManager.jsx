import React from 'react';
import Navbar from './Navbar';
import './zippay.css';
import ProtoPaymentsGrid from './ProtoPaymentsGrid';

function ZipPayManager() {
	return (
		<section className="zippay-main">
			<Navbar></Navbar>
			<ProtoPaymentsGrid />
		</section>
	);
}

export default ZipPayManager;
