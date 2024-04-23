import React from 'react';

/*
{"id":1,"payorId":"kvecardg","payeeId":"adickha","datePaid":"2022-07-08","amount":10.06,"reason":"📚 Course support"},
{"id":2,"payorId":"avlachqi","payeeId":"achugg2c","datePaid":"2023-02-05","amount":28.21,"reason":"💵 Payback"},
{"id":3,"payorId":"adrucekw","payeeId":"nhaskerpd","datePaid":"2023-06-09","amount":21.65,"reason":"📸"},
{"id":4,"payorId":"epilbury9w","payeeId":"dtrevarthenjt","datePaid":"2023-12-30","amount":46.08,"reason":null},
{"id":5,"payorId":"dgrzelczykl4","payeeId":"croastr6","datePaid":"2023-01-23","amount":21.82,"reason":"💍 Wedding gift"}
*/

function ProtoPaymentsGrid() {
	return (
		<section>
			{/* Headers */}
			<div>Sender</div>
			<div>Recipient</div>
			<div>Date</div>
			<div>Amount</div>
			<div>Reason</div>
			{/* Row */}
			<div>pax</div>
			<div>acastillo</div>
			<div>2024-04-23</div>
			<div>55.27</div>
			<div>Bar bill</div>
			{/* Row */}
			<div>pax</div>
			<div>acastillo</div>
			<div>2024-04-23</div>
			<div>55.27</div>
			<div>Bar bill</div>
			{/* Row */}
			<div>pax</div>
			<div>acastillo</div>
			<div>2024-04-23</div>
			<div>55.27</div>
			<div>Bar bill</div>
			{/* Row */}
			<div>pax</div>
			<div>acastillo</div>
			<div>2024-04-23</div>
			<div>55.27</div>
			<div>Bar bill</div>
		</section>
	);
}

export default ProtoPaymentsGrid;
