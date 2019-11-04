import React from 'react';

const Ninjas = ({ ninjas, deleteNinja }) => {
	//console.log(ninjas);
	const ninjaList = ninjas
		.filter(ninja => ninja.age > 29)
		.map(ninja => {
			return (
				<div className='ninja' key={ninja.id}>
					<div> Name : {ninja.name}</div>
					<div>Age: {ninja.age}</div>
					<div> Belt: {ninja.belt}</div>
					<button
						onClick={() => {
							deleteNinja(ninja.id);
						}}
					>
						delete ninja
					</button>
				</div>
			);
		});
	return <div className='ninja-list'>{ninjaList}</div>;
};

export default Ninjas;
