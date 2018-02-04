export interface Station {
    id: number;
    edsm_id: number;
    name: string;
    x: number;
    y: number;
    z: number;
    population: number;
    is_populated: true;
    government_id: number;
    government: string;
    allegiance_id: number;
    allegiance: string;
    state_id: number;
    state: string;
    security_id: number;
    security: string;
    primary_economy_id: number;
    primary_economy: string;
    power: string;
    power_state: string;
    power_state_id: number;
    needs_permit: false;
    updated_at: number;
    simbad_ref: any;
    controlling_minor_faction_id: number;
    controlling_minor_faction: string;
    reserve_type_id: number;
    reserve_type: string;
    minor_faction_presences: MinorFaction[];
}

export interface MinorFaction {
    minor_faction_id: number;
    state_id: number;
    influence: number;
    state: string;
}
