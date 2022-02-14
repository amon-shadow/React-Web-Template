import { AcUnit } from '@material-ui/icons';
import React from 'react';
import * as Path from "./RoutePath";

export const menuList = [
    {
        name: "/",
        label: "Dashboard",
        sequence: 1,
        icon: <AcUnit />,
        routePath: Path.DASHBOARD,
    },
    {
        name: "/test/",
        label: "Test",
        sequence: 2,
        // image: "/images/logo.svg",
        icon: <AcUnit />,
        routePath: Path.TEST,
        stateKey: "testSubMenu",
        subMenu: [
            {
                name: "/test/test1/",
                label: "Test 1",
                sequence: 1,
                routePath: Path.TEST,
            },
            {
                name: "/test/test2/",
                label: "Test 2",
                sequence: 2,
                routePath: Path.TEST2,
            },
        ],
    },
];