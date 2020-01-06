import {PlaygroudCode, Playground} from 'components/styleguide';
import React from 'react';
import {Avatar} from '../';
import {AuthorProps} from '../Author';
import {AvatarProps} from '../Avatar';
import {AvatarGroupProps} from '../AvatarGroup';

export const AvatarData: AvatarProps = {
	name: 'Joe Bloggs',
	href: '#avatar',
};

export const AvatarDemo = () => (
	<Playground
		fields={[
			{
				name: 'hasImage',
				label: 'Has Image',
				value: false,
				type: 'switch',
			},
			{
				name: 'name',
				label: 'Name',
				type: 'text',
				value: AvatarData.name,
			},
			{
				name: 'href',
				label: 'Url',
				type: 'url',
				value: AvatarData.href,
			},
			{
				name: 'size',
				label: 'Size',
				type: 'radio',
				value: '',
				layout: 'boxed',
				options: [
					{
						label: 'Default',
						value: 'default',
					},
					{
						label: 'Medium',
						value: 'md',
					},
					{
						label: 'Large',
						value: 'lg',
					},
					{
						label: 'x-Large',
						value: 'xl',
					},
					{
						label: '2x-Large',
						value: '2xl',
					},
				],
			},
			{
				name: 'status',
				label: 'Status',
				type: 'radio',
				value: '',
				layout: 'boxed',
				options: [
					{
						label: 'None',
						value: '',
					},
					{
						label: 'Online',
						value: 'online',
					},
					{
						label: 'Offline',
						value: 'offline',
					},
					{
						label: 'Away',
						value: 'away',
					},
				],
			},
		]}
	>
		{values => {
			const {hasImage, ...rest} = values;
			if (hasImage) {
				rest.image = {
					src: 'https://i.pravatar.cc/300',
				};
			}
			return (
				<>
					<Avatar {...rest} />
					<PlaygroudCode name="Avatar" config={rest} />
				</>
			);
		}}
	</Playground>
);

export const AuthorData: AuthorProps = {
	...AvatarData,
	...{
		additional: 'Senior Developer',
	},
};

export const AuthorDemo = () => (
	<Playground
		fields={[
			{
				name: 'hasAvatar',
				label: 'Has Avatar',
				value: true,
				type: 'switch',
			},
			{
				name: 'hasImage',
				label: 'Has Image',
				value: false,
				type: 'switch',
			},
			{
				name: 'name',
				label: 'Name',
				type: 'text',
				value: AuthorData.name,
			},
			{
				name: 'additional',
				label: 'Additional',
				type: 'text',
				value: AuthorData.additional,
			},
			{
				name: 'href',
				label: 'Url',
				type: 'url',
				value: AuthorData.href,
			},
			{
				name: 'size',
				label: 'Size',
				type: 'radio',
				value: '',
				layout: 'boxed',
				options: [
					{
						label: 'Default',
						value: 'default',
					},
					{
						label: 'Medium',
						value: 'md',
					},
					{
						label: 'Large',
						value: 'lg',
					},
					{
						label: 'x-Large',
						value: 'xl',
					},
					{
						label: '2x-Large',
						value: '2xl',
					},
				],
			},
			{
				name: 'status',
				label: 'Status',
				type: 'radio',
				value: '',
				layout: 'boxed',
				options: [
					{
						label: 'None',
						value: '',
					},
					{
						label: 'Online',
						value: 'online',
					},
					{
						label: 'Offline',
						value: 'offline',
					},
					{
						label: 'Away',
						value: 'away',
					},
				],
			},
		]}
	>
		{values => {
			const {hasImage, ...rest} = values;
			if (hasImage) {
				rest.image = {
					src: 'https://i.pravatar.cc/300',
				};
			}
			return (
				<>
					<Author {...rest} />
					<PlaygroudCode name="Author" config={rest} />
				</>
			);
		}}
	</Playground>
);

export const AvatarGroupData: AvatarGroupProps = {
	items: [AvatarData, AvatarData, AvatarData, AvatarData],
};

export const AvatarGroupDemo = () => <div></div>;
