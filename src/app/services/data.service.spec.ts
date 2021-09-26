import { TestBed } from '@angular/core/testing';

import { dataService } from './data.service';

describe('dataService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: dataService = TestBed.get(dataService);
        expect(service).toBeTruthy();
    });
});
