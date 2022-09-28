import React from 'react';
import Marquee from 'react-fast-marquee';

export default function Footer() {
	return (
		<footer className='footer'>
			<Marquee gradient={false}>
				<p>
					• READY TO MAKE AN IMPACT? • MINTING MARCH 26 • READY TO
					MAKE AN IMPACT? • MINTING MARCH 26 • READY TO MAKE AN
					IMPACT? • MINTING MARCH 26&nbsp;
					<span className='show-large-screens'>
						• READY TO MAKE AN IMPACT? • MINTING MARCH 26 • READY TO
						MAKE AN IMPACT? • MINTING MARCH 26 • READY TO MAKE AN
						IMPACT? • MINTING MARCH 26&nbsp;
					</span>
				</p>
			</Marquee>
		</footer>
	);
}
