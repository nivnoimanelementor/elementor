import { Button } from '@elementor/app-ui';

const MyButton = (props) =>{
	const {active,buttonClassName, ...buttonArgs} = props
	return(
		<div className={`${buttonClassName} ${active ? 'active' : ''}`}>
			<Button { ...buttonArgs} />
		</div>
	)
}

const MenuItemButton = ( props ) => {
	const {url,label, linkType, data} = props.itemsByType;
	return 'link' === linkType
		? <MyButton
			url={ url }
			target="_blank"
			rel="noreferrer"
			buttonClassName={ `menu-button-title` }
			text={ label }
			icon={ 'eicon-editor-external-link' }
			active={data[0]?.isActive}
		/> : <MyButton
			key={ label }
			text={ label }
			buttonClassName={ `menu-button-title` }
			url={ url }
			active={data[0]?.isActive}
		/>
};
//
// ItemsFilterList.propTypes = {
// 	itemsByType: PropTypes.shape( {
// 		key: PropTypes.string,
// 		label: PropTypes.string,
// 		data: PropTypes.arrayOf( PropTypes.object ),
// 		isOpenByDefault: PropTypes.bool,
// 	} ),
// 	onCollapseChange: PropTypes.func,
// 	onChange: PropTypes.func,
// };

export default React.memo( MenuItemButton );
