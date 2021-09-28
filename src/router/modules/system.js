const Layout = () => import('@/layout/index.vue')

const route=[
    {
        path: '/system',
        component: Layout,
        redirect: '/system/organization',
        name: 'system',
        meta: {
            title: '职能管理',
            icon: 'sidebar-breadcrumb'
        },
        children: [
            {
                path: 'organization',
                name: 'organization',
                component: () => import('@/views/systemSettings/functionManage/organization.vue'),
                meta: {
                    title: '组织架构与成员'
                }
            },
            {
                path: 'jurisdiction',
                name: 'jurisdiction',
                component: () => import('@/views/systemSettings/functionManage/jurisdiction.vue'),
                meta: {
                    title: '角色与权限管理',
                },
                children: [
                    {
                        path: 'addRole',
                        name: 'addRole',
                        component: () => import('@/views/systemSettings/functionManage/addRole.vue'),
                        meta: {
                            title: '添加角色',
                            sidebar: false,
                            breadcrumb: true,
                            activeMenu: '/system/jurisdiction',
                        }
                    }
                    ]
            },
        ]
    },
    // {
    //     path: '/breadcrumb_example',
    //     component: () => import('@/views/breadcrumb_example/list1.vue'),
    //     name: 'breadcrumbExample',
    //     meta: {
    //         title: '主体配置',
    //         icon: 'sidebar-breadcrumb'
    //     },
    //     children: []
    // },
    // {
    //     path: '/breadcrumb_example',
    //     component: () => import('@/views/breadcrumb_example/list1.vue'),
    //     name: 'breadcrumbExample',
    //     meta: {
    //         title: '事件配置',
    //         icon: 'sidebar-breadcrumb'
    //     },
    //     children: []
    // },
    // {
    //     path: '/breadcrumb_example',
    //     component: Layout,
    //     redirect: '/breadcrumb_example/list1',
    //     name: 'breadcrumbExample',
    //     meta: {
    //         title: '全局配置',
    //         icon: 'sidebar-breadcrumb'
    //     },
    //     children: [
    //         {
    //             path: 'list1',
    //             name: 'breadcrumbExampleList1',
    //             component: () => import('@/views/breadcrumb_example/list1.vue'),
    //             meta: {
    //                 title: '组织架构与成员'
    //             }
    //         },
    //         {
    //             path: 'detail1',
    //             name: 'breadcrumbExampleDetail1',
    //             component: () => import('@/views/breadcrumb_example/detail1.vue'),
    //             meta: {
    //                 title: '角色与权限管理',
    //                 activeMenu: '/breadcrumb_example/list1',
    //                 children: [
    //                     {
    //                         path: '',
    //                         component: () => import('@/views/breadcrumb_example/list2.vue'),
    //                         meta: {
    //                             title: '列表2（层级模式）',
    //                             sidebar: false,
    //                             breadcrumb: false
    //                         }
    //                     },
    //                     {
    //                         path: 'detail2',
    //                         name: 'breadcrumbExampleDetail2',
    //                         component: () => import('@/views/breadcrumb_example/detail2.vue'),
    //                         meta: {
    //                             title: '详情2',
    //                             sidebar: false,
    //                             activeMenu: '/breadcrumb_example/list2'
    //                         }
    //                     }
    //                 ]
    //             }
    //         },
    //     ]
    // },
    // {
    //     path: '/breadcrumb_example',
    //     component: Layout,
    //     redirect: '/breadcrumb_example/list1',
    //     name: 'breadcrumbExample',
    //     meta: {
    //         title: '欢迎语配置',
    //         icon: 'sidebar-breadcrumb'
    //     },
    //     children: [
    //         {
    //             path: 'list1',
    //             name: 'breadcrumbExampleList1',
    //             component: () => import('@/views/breadcrumb_example/list1.vue'),
    //             meta: {
    //                 title: '组织架构与成员'
    //             }
    //         },
    //         {
    //             path: 'detail1',
    //             name: 'breadcrumbExampleDetail1',
    //             component: () => import('@/views/breadcrumb_example/detail1.vue'),
    //             meta: {
    //                 title: '角色与权限管理',
    //                 activeMenu: '/breadcrumb_example/list1',
    //                 children: [
    //                     {
    //                         path: '',
    //                         component: () => import('@/views/breadcrumb_example/list2.vue'),
    //                         meta: {
    //                             title: '列表2（层级模式）',
    //                             sidebar: false,
    //                             breadcrumb: false
    //                         }
    //                     },
    //                     {
    //                         path: 'detail2',
    //                         name: 'breadcrumbExampleDetail2',
    //                         component: () => import('@/views/breadcrumb_example/detail2.vue'),
    //                         meta: {
    //                             title: '详情2',
    //                             sidebar: false,
    //                             activeMenu: '/breadcrumb_example/list2'
    //                         }
    //                     }
    //                 ]
    //             }
    //         },
    //     ]
    // },
]
export default route
