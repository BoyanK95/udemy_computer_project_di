import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  SupplyPower(watss: number) {
    console.log(`Supplying ${watss} watss worth of power.`);
  }
}
