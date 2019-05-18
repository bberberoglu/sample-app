import { InjectionToken } from '@angular/core';

export type LAZY_MODULES = {
  payment: string;
  transfer: string;
};

export const lazyMap: LAZY_MODULES = {
  payment: 'src/app/modules/payment/payment.module#PaymentModule',
  transfer: 'src/app/modules/transfer/transfer.module#TransferModule'
};

export const LAZY_MODULES_MAP = new InjectionToken('LAZY_MODULES_MAP', {
  factory: () => lazyMap
});
