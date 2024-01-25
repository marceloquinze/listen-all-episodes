import metadata from '../block.json';
import { registerBlockType } from '@wordpress/blocks';
import {InspectorControls, useBlockProps} from '@wordpress/block-editor';
import {PanelBody, PanelRow, TextControl, ToggleControl, CheckboxControl} from '@wordpress/components';
import { useState } from 'react';

registerBlockType(
	metadata,
	{
		edit,
		save
	}
);

function edit(props){
	//blockProps faz o elemento se integrar ao editor (ficar constrito à caixa e selecionável)
	const blockProps = useBlockProps();

	const [isChecked, setChecked] = useState( true );

	// Posso fazer assim, ou com arrow function
	// ver abaixo exemplo com arrow function
	function setLink(value){
		props.setAttributes({ link: value })
	}

	return (
		<p {...blockProps}>
			<InspectorControls>
				<PanelBody title='Link Options'>
					<PanelRow>
						<TextControl
							label="Show URL"
							value={ props.attributes.link }
							onChange={ setLink }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Open in a new tab?"
							help={ props.attributes.newTab ? 'Opens in new tab' : 'Opens in same tab'}
							checked={ props.attributes.newTab }
							onChange={ x => props.setAttributes({ newTab: x }) }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<a target={ props.attributes.newTab === true ? '_blank' : '_self' } href={props.attributes.link} rel="noopener">Escute todos os programas</a>
		</p>
	)
}

function save(props){
	return (
		<p>
			<a target={ props.attributes.newTab === true ? '_blank' : '_self' } href={props.attributes.link} rel="noopener">Escute todos os programas</a>
		</p>
	)
}