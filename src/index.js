import metadata from '../block.json'
import { registerBlockType } from '@wordpress/blocks';
import {InspectorControls, BlockControls, useBlockProps} from '@wordpress/block-editor'
import {PanelBody, PanelRow, TextControl} from '@wordpress/components';


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
	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title='Link URL'>
					<PanelRow>
						<TextControl
							label="Show URL"
							value={ props.attributes.link }
							onChange={ x => props.setAttributes({ link: x })}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<a target="" href={props.attributes.link} rel="noopener">Escute todos os programas</a>
		</div>
	)
}

function save(props){
	return (
		<div>
			<a target="" href={props.attributes.link} rel="noopener">Escute todos os programas</a>
		</div>
	)
}