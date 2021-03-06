import { HalvesInfo } from './halves-info';
import { UhkDeviceProduct } from './uhk-products';

export interface DeviceConnectionState {
    connectedDevice?: UhkDeviceProduct;
    hasPermission: boolean;
    bootloaderActive: boolean;
    /**
     * True if more then 1 UHK device connected.
     */
    multiDevice: boolean;
    zeroInterfaceAvailable: boolean;
    halvesInfo: HalvesInfo;
}
