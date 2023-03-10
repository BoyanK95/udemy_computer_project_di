import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(watss: number) {
    console.log(`Supplying ${watss} watss worth of power.`);
  }
}
