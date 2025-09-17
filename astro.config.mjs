// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'TuringClub',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
   				{
        			label: 'Guides',
        			items: [
            			{ label: 'Getting Started with Programming', slug: 'guides/programming/1' },           // 新增
            			{ label: 'Java Programming Fundamentals', slug: 'guides/programming/2' },           // 新增
        			],
    			},
			],
		}),
	],
});
