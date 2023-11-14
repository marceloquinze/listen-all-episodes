import metadata from '../block.json'
import { registerBlockType } from '@wordpress/blocks';

registerBlockType(
	metadata,
	{
		edit,
		save
	}
);

function edit(){
	return (
		<h1>Olá</h1>
	)
}

function save(){
	return (
		<h1>Olá</h1>
	)
}