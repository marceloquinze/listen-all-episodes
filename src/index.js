import metadata from '../block.json';
import { registerBlockType } from '@wordpress/blocks';
import {InspectorControls, BlockControls, useBlockProps} from '@wordpress/block-editor';
import {PanelBody, PanelRow, TextControl, CheckboxControl} from '@wordpress/components';
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

	//const [isChecked, setChecked] = useState( true );

	return (
		<p {...blockProps}>
			<InspectorControls>
				<PanelBody title='Link Options'>
					<PanelRow>
						<TextControl
							label="Show URL"
							value={ props.attributes.link }
							onChange={ x => props.setAttributes({ link: x })}
						/>
					</PanelRow>
					<PanelRow>
						<CheckboxControl
							label="Open in a new tab?"
							help= "Will this link open in a new tab?"
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