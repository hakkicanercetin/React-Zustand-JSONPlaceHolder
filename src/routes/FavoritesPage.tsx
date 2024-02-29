/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tabs, Text } from "@mantine/core";
import { AlbumPageCardStyle, CardStyle, ResultWrapper } from "../styledComponents";

export function FavoritesPage() {
  const favoriteAlbums: any = JSON.parse(localStorage.getItem("allData-storage")!
  );
  return (
    <>
    <Tabs defaultValue="favPost">
      <Tabs.List>
        <Tabs.Tab value="favPost">
        Favorilenmiş Postlar
        </Tabs.Tab>
        <Tabs.Tab value="favAlbum">
        Favorilenmiş Albümler
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="favPost">
      <ResultWrapper>
      {favoriteAlbums.state.postData.map((post: any, index: number) => (
          <CardStyle key={index}>
            <Text fw={"bold"}>{post.title}</Text>
            <Text>{post.body}</Text>
          </CardStyle>
      ))}
    </ResultWrapper>
      </Tabs.Panel>
      <Tabs.Panel value="favAlbum">
      <ResultWrapper>
        {favoriteAlbums.state.photoData.map((photo: any, index: number) => (
          <AlbumPageCardStyle key={index}>
            <Text fw={"bold"}>{photo.title}</Text>
            <img src={photo.url}></img>
          </AlbumPageCardStyle>
        ))}
      </ResultWrapper>
      </Tabs.Panel>
    </Tabs>

      
     
    </>
  );
}

export default FavoritesPage;
