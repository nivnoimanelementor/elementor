import Layout from './components/layout';
import ItemsFilter from './components/items-filter';
import usePageTitle from 'elementor-app/hooks/use-page-title';

import './index.scss';
import Header from './components/layout/header';
import {useMemo} from 'react';
import {Router, useLocation} from '@reach/router';
import DisplayContent from './pages/display-content';

/**
 * Generate the menu items for the index page.
 *
 * @param {string} path
 * @return {Array} menu items
 */
function useMenuItems( path ) {
	//return useMemo( () => {
		return [
			{
				text: 'Site Content',
				type: 'site-content',
				isActive: '/dashboard/site-content' === path,
				url: '/dashboard/site-content',
				display: {
					path: '/site-content',
					type: 'image',
					src: 'site-content.png',
				},
			},
			{
				text: 'Basic Setup',
				type: 'basic-setup',
				isActive: '/dashboard/basic-setup' === path,
				url: '/dashboard/basic-setup',
				display: {
					path: '/basic-setup',
					type: 'image',
					src: 'basic-setup.png',
				},
			},
			{
				text: 'Website Templates',
				type: 'website-templates',
				isActive: '/dashboard/website-templates' === path,
				url: '/dashboard/website-templates',
				display: {
					path: '/website-templates',
					type: 'iframe',
					src: 'admin.php?page=elementor-app&ver=3.10.2&hide_wp=true#kit-library',
				},
			},
			{
				text: 'Home',
				type: 'home',
				isActive: '/dashboard' === path,
				url: '/dashboard',
				display: {
					path: '/',
					type: 'image',
					src: 'dashboard.png',
				},
			},
			{
				text: 'Add New',
				type: 'home',
				isActive: 'add-new' === path,
				url: '/dashboard/add-new',
				display: {
					path: '/add-new',
					type: 'image',
					src: 'addnew.png',
				},
			},
			{
				text: 'Site Settings',
				type: 'setup',
				isActive: 'setup/general' === path,
				url: '/dashboard/setup/general',
				display: {
					path: '/setup/general',
					type: 'image',
					src: 'Site Settings.png',
				},
			},
			{
				text: 'Elementor Settings',
				type: 'settings',
				isActive: 'elementor-settings' === path,
				url: '/dashboard/settings/elementor-settings',
				display: {
					path: '/settings/elementor-settings',
					type: 'image',
					src: 'elementor-settings.png',
				},
			},
			{
				text: 'Design Settings',
				type: 'settings',
				isActive: 'design-settings' === path,
				url: '/dashboard/settings/design-settings',
				display: {
					path: '/settings/design-settings',
					type: 'image',
					src: 'design-settings.png',
				},
			},
			{
				text: 'Features & Experiments',
				type: 'settings',
				isActive: 'setup-features' === path,
				url: '/dashboard/settings/features',
				display: {
					path: '/settings/features',
					type: 'iframe',
					src: 'admin.php?page=elementor&hide_wp=true#tab-experiments',
				},
			},
			{
				text: 'Role Manage',
				type: 'settings',
				isActive: 'role-manager' === path,
				url: '/dashboard/settings/role-manager',
				display: {
					path: '/settings/role-manager',
					type: 'iframe',
					src: 'admin.php?page=elementor-role-manager&hide_wp=true',
				},
			},
			{
				text: 'Tools',
				type: 'setup',
				isActive: 'tools' === path,
				url: '/dashboard/setup/tools',
				display: {
					path: '/setup/tools',
					type: 'iframe',
					src: 'admin.php?page=elementor-tools&hide_wp=true#tab-general',
				},
			},
			{
				text: 'Custom Code',
				type: 'customizations',
				isActive: 'custom-code' === path,
				url: '/dashboard/customizations/custom-code',
				display: {
					path: '/customizations/custom-code',
					type: 'iframe',
					src: 'edit.php?post_type=elementor_snippet&hide_wp=true',
				},
			},
			{
				text: 'Integrations',
				type: 'customizations',
				isActive: 'integrations' === path,
				url: '/dashboard/customizations/integrations',
				display: {
					path: '/customizations/integrations',
					type: 'iframe',
					src: 'admin.php?page=elementor&hide_wp=true#tab-integrations',
				},
			},
			{
				text: 'Categories',
				type: 'customizations',
				isActive: 'categories' === path,
				url: '/dashboard/customizations/categories',
				display: {
					path: '/customizations/categories',
					type: 'iframe',
					src: 'edit-tags.php?taxonomy=category&hide_wp=true',
				},
			},
			{
				text: 'Backups',
				type: 'setup',
				isActive: '' === path,
				url: 'https://my.elementor.com/',
				linkType: 'link',
			},
			{
				text: 'Theme Builder',
				type: 'components',
				isActive: 'theme-builder' === path,
				url: '/dashboard/components/theme-builder',
				display: {
					path: '/components/theme-builder',
					type: 'iframe',
					src: 'admin.php?page=elementor-app&ver=3.10.2&hide_wp=true#site-editor',
				},

			},
			{
				text: 'Kit Library',
				type: 'design',
				isActive: 'kit-library' === path,
				url: '/dashboard/design/kit-library',
				display: {
					path: '/design/kit-library',
					type: 'iframe',
					src: 'admin.php?page=elementor-app&ver=3.10.2&hide_wp=true#kit-library',
				},

			},
			{
				text: 'Saved Templates',
				type: 'components',
				isActive: 'saved-templates' === path,
				url: '/dashboard/components/saved-templates',
				display: {
					path: '/components/saved-templates',
					type: 'iframe',
					src: 'edit.php?post_type=elementor_library&hide_wp=true&tabs_group=library',
				},
			},
			// {
			// 	text: 'Kit Actions',
			// 	type: 'design',
			// 	isActive: 'kit-actions' === path,
			// 	url: '/dashboard/design/kit-actions',
			// 	display: {
			// 		path: '/design/kit-actions',
			// 		type: 'iframe',
			// 		src: 'admin.php?page=elementor-tools&hide_wp=true#tab-import-export-kit',
			// 	},
			// },
			{
				text: 'Custom Fonts',
				type: 'customizations',
				isActive: 'custom-fonts' === path,
				url: '/dashboard/customizations/custom-fonts',
				display: {
					path: '/customizations/custom-fonts',
					type: 'iframe',
					src: 'edit.php?post_type=elementor_font&hide_wp=true',
				},
			},
			{
				text: 'Custom Icons',
				type: 'customizations',
				isActive: 'custom-icons' === path,
				url: '/dashboard/customizations/custom-icons',
				display: {
					path: '/customizations/custom-icons',
					type: 'iframe',
					src: 'edit.php?post_type=elementor_icons&hide_wp=true',
				},
			},
			{
				text: 'Popups',
				type: 'marketing',
				isActive: 'popups' === path,
				url: '/dashboard/marketing/popups',
				display: {
					path: '/marketing/popups',
					type: 'iframe',
					src: 'edit.php?post_type=elementor_library&tabs_group=popup&elementor_library_type=popup&hide_wp=true',
				},
			},
			{
				text: 'Landing Pages',
				type: 'marketing',
				isActive: 'landing-pages' === path,
				url: '/dashboard/marketing/landing-pages',
				display: {
					path: '/marketing/landing-pages',
					type: 'iframe',
					src: 'edit.php?post_type=elementor_library&page=e-landing-page&hide_wp=true',
				},
			},
			{
				text: 'Form submissions',
				type: 'components',
				isActive: 'form-submissions' === path,
				url: '/dashboard/components/form-submissions',
				display: {
					path: '/components/form-submissions',
					type: 'iframe',
					src: 'admin.php?page=e-form-submissions&hide_wp=true',
				},
			},
			{
				text: 'Regenerate CSS',
				type: 'troubleshooting',
				isActive: 'regenerate-css' === path,
				url: '/dashboard/marketing/regenerate-css',
				display: {
					path: '/marketing/regenerate-css',
					type: 'iframe',
					src: 'admin.php?page=elementor-tools&hide_wp=true',
				},
			},
			{
				text: 'Version Control',
				type: 'troubleshooting',
				isActive: 'version-control' === path,
				url: '/dashboard/marketing/version-control',
				display: {
					path: '/marketing/version-control',
					type: 'iframe',
					src: 'admin.php?page=elementor-tools&hide_wp=true#tab-versions',
				},
			},
			{
				text: 'Staging',
				type: 'account-and-hosting',
				linkType: 'link',
				url: 'https://my.elementor.com/websites/',
			},
			{
				text: 'Backups',
				type: 'account-and-hosting',
				linkType: 'link',
				url: 'https://my.elementor.com/websites/',
			},
			{
				text: 'Site Lock',
				type: 'account-and-hosting',
				linkType: 'link',
				url: 'https://my.elementor.com/websites/',
			},
			{
				text: 'Billing',
				type: 'account-and-hosting',
				linkType: 'link',
				url: 'https://my.elementor.com/websites/',
			},
		];
	//}, [ location ] );
}

export default function Index() {
	usePageTitle( {
		title: __( 'Dashboard', 'elementor' ),
	} );

	const location = useLocation();
	const sideBarItems = useMenuItems( location.pathname );

	return (
		<Layout
			header={
				<Header />
			}
			sidebar={
				<ItemsFilter items={ sideBarItems }	/>
			}
		>
			<div className="e-dashboard__container">
				<Router>
					{
						sideBarItems.map( ( item ) => (
							item.display &&
							<DisplayContent
								key={ item.text }
								path={ item.display.path }
								type={ item.display.type }
								src={ item.display.src }
							/>
						) )
					}
				</Router>
			</div>
		</Layout>
	);
}

Index.propTypes = {
	path: PropTypes.string,
	initialQueryParams: PropTypes.object,
	renderNoResultsComponent: PropTypes.func,
};

Index.defaultProps = {
	initialQueryParams: {},
	renderNoResultsComponent: ( { defaultComponent } ) => defaultComponent,
};
