import { inject, Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BanInfo, Database } from '../models';
import { DataService } from './data.service';
import { SteamService } from './steam.service';

@Injectable()
export class MockDataService extends DataService {
  override database: Database = {
    apiKey: 'test',
    players: [],
    matches: [],
  };
}

describe('SteamService', () => {
  let steamService: SteamService;

  beforeEach(() => {
    TestBed.runInInjectionContext(() => {
      steamService = inject(SteamService);
    });
  });

  it('scan bans OK', async () => {
    const steamIds: string[] = [];

    steamIds.push('testA', 'testB');
    spyOn(window, 'fetch').and.resolveTo(
      new Response(
        JSON.stringify({
          players: steamIds.map((steamId: string) => {
            const banInfo: BanInfo = {
              CommunityBanned: false,
              DaysSinceLastBan: 0,
              EconomyBan: '',
              LastBanOn: '',
              LastFetch: '',
              NumberOfGameBans: 0,
              NumberOfVACBans: 0,
              SteamId: steamId,
              VACBanned: false,
            };
            return banInfo;
          }),
        }),
        {
          status: 200,
          statusText: 'OK',
        },
      ),
    );
    const data = await steamService.scanPlayers(steamIds);
    expect(data).toBeDefined();
    expect(data.length).toEqual(2);
  });

  it('scan bans KO', async () => {
    spyOn(window, 'fetch').and.resolveTo(
      new Response(JSON.stringify({}), {
        status: 500,
        statusText: 'Error message',
      }),
    );
    let banInfos: BanInfo[] = [];
    try {
      banInfos = await steamService.scanPlayers([]);
    } catch (e: any) {
      expect(banInfos).toBeDefined();
      expect(banInfos.length).toEqual(0);
      expect(e).toBeDefined();
      expect(e.message).toEqual('Code 500. Error message');
    }
  });
});
