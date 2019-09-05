import * as React from 'react';

import './Author.scss';

import {ImgProps} from 'components/editable';
import {Avatar} from './';
import {getModifiers} from 'components/libs';

export type AvatarProps = {
	name: string;
	image?: ImgProps;
	size?: string;
	initials?: string;
	position?: string;
	hasAvatar?: boolean;
};

export const Author = (props: AvatarProps) => {
	const base: string = 'author';

	const {position, hasAvatar = true, ...rest} = props;
	const {name} = props;

	const atts = {className: getModifiers(base, {})};

	return (
		<div {...atts}>
			<div className={`${base}__main`}>
				{hasAvatar && <Avatar {...rest} />}
				<div className={`${base}__detail`}>
					<span>{name}</span>
					<span>{position}</span>
				</div>
			</div>
		</div>
	);
};
