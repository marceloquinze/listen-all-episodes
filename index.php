<?php
/*
Plugin Name: Escute Todos os Episodios
Description: Um bloco simples para adicionar um link padronizado para ouvir todos os eposódios de um programa de rádio
Version: 1.0
Author: Marcelo Vieira
Author URI: https://marcelowebdesign.com
*/

if( ! defined( 'ABSPATH' ) ) exit;

class ListenAllEpisodes{
	function __construct(){
		add_action( 'init', array( $this, 'register_block' ));
	}

	function register_block(){
		register_block_type( __DIR__ );
	}
}

$listen_all = new ListenAllEpisodes();
