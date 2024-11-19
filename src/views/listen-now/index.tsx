import { categoryAtom } from '@/atoms/listen-now-atom';
import { AlbumArtwork } from './AlbumArtwork';

const ListenNow = () => {
  const category = useAtomValue(categoryAtom);
  return (
    <div className="grid h-full">
      <div className="col-span-3">
        <Tabs defaultValue={category[0].name} className="h-full space-y-6">
          <div className="space-between flex items-center">
            <TabsList>
              {category.map((item) => (
                <TabsTrigger
                  key={item.id}
                  value={item.name}
                  className="relative"
                >
                  {item.name}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="ml-auto mr-4">
              <Button>
                <Icon name="circle-plus" className="mr-2 h-4 w-4" />
                Add music
              </Button>
            </div>
          </div>
          {category.map((item) => (
            <TabsContent
              key={item.id}
              value={item.name}
              className="border-none p-0 outline-none"
            >
              {item.subfields.map((subfield) => (
                <>
                  <div
                    key={subfield.id}
                    className="flex items-center justify-between"
                  >
                    <div className="space-y-1">
                      <h2 className="text-2xl font-semibold tracking-tight">
                        {subfield.name}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {subfield.description}
                      </p>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="relative">
                    <ScrollArea className="container">
                      <div className="flex space-x-4 pb-4">
                        {subfield.albums.map((album) => (
                          <AlbumArtwork
                            key={album.name}
                            album={album}
                            className="w-[250px]"
                            aspectRatio="portrait"
                            width={250}
                            height={330}
                          />
                        ))}
                      </div>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  </div>
                </>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ListenNow;
