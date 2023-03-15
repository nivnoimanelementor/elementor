import App from './app';

import AppProvider from './app-context';
import Dashboard from '../../modules/dashboard/assets/js/module';

import * as ReactDOM from 'react-dom';

new Dashboard();

const AppWrapper = React.Fragment;

const appDashboard = document.getElementById( 'e-app-dashboard' );

const renderTooltip = ( triggerElement, content ) => {

	// Create Tooltip Container
	const wrapper = document.createElement( 'div' );
	wrapper.classList.add( 'e-tooltip-container','arrow-left' );
	wrapper.innerHTML = content;

	triggerElement.appendChild( wrapper );

	triggerElement.addEventListener('mouseenter', ( e ) => {
		wrapper.classList.add( 'active' );
	} );
	triggerElement.addEventListener('mouseleave', ( e ) => {
		wrapper.classList.remove( 'active' );
	} );
}

if ( appDashboard ) {
	document.querySelector( '#adminmenu .toplevel_page_elementor-dashboard' ).classList.add( 'current' );
	document.getElementById( 'wp-admin-bar-wp-logo' ).classList.add( 'hidden' );
	document.getElementById( 'wp-admin-bar-new-content' ).classList.add( 'hidden' );
	document.getElementById( 'wp-admin-bar-updates' ).classList.add( 'hidden' );
	document.getElementById( 'wp-admin-bar-comments' ).classList.add( 'hidden' );
	renderTooltip( document.getElementById( 'toplevel_page_index' ), 'WordPress');
	document.body.classList.add( 'folded' );

	ReactDOM.render(
		<AppWrapper>
			<AppProvider>
				<App />
			</AppProvider>
		</AppWrapper>,
		appDashboard,
	);
} else {
	document.body.classList.remove( 'folded' );
}

