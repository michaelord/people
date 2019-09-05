import * as React from 'react';

import './Avatar.scss';

import {Img, ImgProps} from 'components/editable';

import {getModifiers} from 'components/libs';

export type AvatarProps = {
	name: string;
	image?: ImgProps;
	size?: string;
	initials?: string;
};

export const Avatar = (props: AvatarProps) => {
	const base: string = 'avatar';

	const {name, image, size = '', initials} = props;

	const atts = {
		className: getModifiers(base, {
			size,
		}),
	};

	const status = () => {
		return null;

		// return <span role="status" className={`${base}__status`} aria-label="Active" />
	};

	if ((name || initials) && !image) {
		const label =
			initials ||
			name
				.replace(/([\[\]])/gi, '')
				.split(' ')
				.map(part => {
					return part
						.trim()
						.charAt(0)
						.toUpperCase();
				})
				.join('');

		return (
			<span {...atts} data-initials={label}>
				{status()}
			</span>
		);
	}

	if (!image) {
		return null;
	}

	return (
		<span {...atts}>
			<Img {...image} />
			{status()}
		</span>
	);
};
