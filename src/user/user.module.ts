import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import {AnimalModule} from "../../../bonus_2023_dec_2022/bonus-dec-2022/src/animal/animal.module";
import {AnimalService} from "../../../bonus_2023_dec_2022/bonus-dec-2022/src/animal/animal.service";

@Module({
  imports: [AnimalModule],
  providers: [UserService, AnimalService]
})
export class UserModule {}
