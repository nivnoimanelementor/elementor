import ItemsFilterList from './items-filter-list';
import MenuItemButton from './menu-item-button';
import { itemType } from '../models/item';

import './tags-filter.scss';

const { useMemo } = React;

export default function ItemsFilter( props ) {
	const itemsByType = useMemo( () => {
		if ( ! props.items ) {
			return [];
		}

		return itemType
			.map( ( tagType ) => ( {
				...tagType,
				dropdown: tagType.dropdown ?? true,
				data: props.items.filter( ( item ) => item.type === tagType.key ),
			} ) )
			//.filter( ( { data } ) => data.length > 0 );
	}, [ props.items ] );

	return (
		<div className="e-kit-library__tags-filter">
			{
				itemsByType.map( ( group ) => {
					let args = {
						key:group.key,
						itemsByType:group,
					}
					if( group.dropdown ){
						return <ItemsFilterList { ... args }/>
					}
					return <MenuItemButton {...args} />;
				} )
			}
		</div>
	);
}

ItemsFilter.propTypes = {
	items: PropTypes.arrayOf( PropTypes.object ),
};
