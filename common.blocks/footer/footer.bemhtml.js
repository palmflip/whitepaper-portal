block('footer')(
	content()(function() {
		return 	{
			block: 'tpl-layout',
			content: [
				{
					elem: 'content',
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center', size: 'm' },
							content: [
								{
									block: 'tpl-grid',
									mods: { ratio: '1-1-1-1-1', 'col-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											content: [
												{
													block: 'image',
													url: '/assets/partners/whitepaper.svg',
													width: 230
												}
											]
										},
										{
											elem: 'fraction',
										},
										{
											elem: 'fraction',
											content: [
												{
													block: 'text',
													mods: { size: 'l', view: 'secondary' },
													mix: { block: 'decorator', mods: { 'indent-b': 's' }},
													tag: 'a',
													attrs: { 
														href: 'http://whitepaper.tools',
														style: 'text-decoration: none; display: block'
													},
													content: ' About'
												},
												{
													block: 'text',
													mods: { size: 'l', view: 'secondary' },
													mix: { block: 'decorator', mods: { 'indent-b': 's' }},
													tag: 'a',
													attrs: { 
														href: 'http://whitepaper.tools',
														style: 'text-decoration: none; display: block'
													},
													content: 'Contributors'
												},
												{
													block: 'text',
													mods: { size: 'l', view: 'secondary' },
													mix: { block: 'decorator', mods: { 'indent-b': 's' }},
													tag: 'a',
													attrs: { 
														href: 'http://whitepaper.tools',
														style: 'text-decoration: none; display: block'
													},
													content: 'PressKit'
												}
											]
										},
										{
											elem: 'fraction',
											content: [
												{
													block: 'text',
													mods: { size: 'l', view: 'secondary' },
													mix: { block: 'decorator', mods: { 'indent-b': 's' }},
													tag: 'a',
													attrs: { 
														href: 'http://whitepaper.tools',
														style: 'text-decoration: none; display: block'
													},
													content: 'Documentation'
												},
												{
													block: 'text',
													mods: { size: 'l', view: 'secondary' },
													mix: { block: 'decorator', mods: { 'indent-b': 's' }},
													tag: 'a',
													attrs: { 
														href: 'http://whitepaper.tools',
														style: 'text-decoration: none; display: block'
													},
													content: 'Github'
												},
												{
													block: 'text',
													mods: { size: 'l', view: 'secondary' },
													mix: { block: 'decorator', mods: { 'indent-b': 's' }},
													tag: 'a',
													attrs: { 
														href: 'http://whitepaper.tools',
														style: 'text-decoration: none; display: block'
													},
													content: 'Telegram'
												},
												{
													block: 'text',
													mods: { size: 'l', view: 'secondary' },
													mix: { block: 'decorator', mods: { 'indent-b': 's' }},
													tag: 'a',
													attrs: { 
														href: 'http://whitepaper.tools',
														style: 'text-decoration: none; display: block'
													},
													content: 'Medium'
												},
												{
													block: 'text',
													mods: { size: 'l', view: 'secondary' },
													mix: { block: 'decorator', mods: { 'indent-b': 's' }},
													tag: 'a',
													attrs: { 
														href: 'http://whitepaper.tools',
														style: 'text-decoration: none; display: block'
													},
													content: 'CodePen'
												}	 
											]
										},
										{
											elem: 'fraction',
											content: [
												{
													block: 'text',
													mods: { size: 'l', view: 'secondary' },
													mix: { block: 'decorator', mods: { 'indent-b': 's' }},
													tag: 'a',
													attrs: { 
														href: 'http://whitepaper.tools',
														style: 'text-decoration: none; display: block'
													},
													content: 'Community'
												},
												{
													block: 'text',
													mods: { size: 'l', view: 'secondary' },
													mix: { block: 'decorator', mods: { 'indent-b': 's' }},
													tag: 'a',
													attrs: { 
														href: 'http://whitepaper.tools',
														style: 'text-decoration: none; display: block'
													},
													content: 'Events'
												},
												{
													block: 'text',
													mods: { size: 'l', view: 'secondary' },
													mix: { block: 'decorator', mods: { 'indent-b': 's' }},
													tag: 'a',
													attrs: { 
														href: 'http://whitepaper.tools',
														style: 'text-decoration: none; display: block'
													},
													content: 'Kit'
												}
											]
										}
									]
								}
							]
						}
					]
				}
			]
		}
	})
);

