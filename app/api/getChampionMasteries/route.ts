// Mensun Wang
// Uses Riot Game's API in order to get the player's list of champion mastery objects
"use server"
import { NextResponse, NextRequest } from 'next/server';
import { champNameMap } from '@/data/champ_mapping';
import { ChampionMastery } from "@/types/types";

// here's where i got info on this: https://nextjs.org/blog/building-apis-with-nextjs#3-creating-an-api-with-route-handlers

export async function GET(request: NextRequest) {
  try {
    // get params data
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    // call api
    const response = await fetch(`https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${id}/top?count=10`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Riot-Token': `${process.env.RIOT_API}`,
      },
    });

    // hit rate limit
    if (response.status == 429) {
      return NextResponse.json(
        { error: 'Rate limit error, please try again another time' },
        { status: 429 }
      );
    }

    // hit not found error
    if (response.status == 404) {
      return NextResponse.json(
        { error: 'Not found error, please enter an existing American name and tag' },
        { status: 404 }
      );
    }

    // if it's not status code 200 or 429 then return error
    if (response.status != 200) {
      return NextResponse.json(
        { error: 'Failed to fetch data, please try again another time' },
        { status: 500 }
      );
    }

    // parse response
    const data = await response.json();

    // map each champion id to its champion's name
    const withNames = data.map((item: ChampionMastery) => ({
      ...item,
      championName: champNameMap[item.championId.toString()] || "Unknown", // puttin unknown just in case they release a new champion
    }));

    // return ID along with success status
    return NextResponse.json({ masteryData: withNames }, { status: 200 });

  } catch (e) {
    // random or server error here
    console.error(e);
    return NextResponse.json(
      { error: 'Failed to fetch data, please try again another time' },
      { status: 500 }
    );
  }
}
