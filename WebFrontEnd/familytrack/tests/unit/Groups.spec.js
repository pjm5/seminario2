import { shallowMount } from '@vue/test-utils'
import Groups from '@/views/Groups.vue'
import groupsResorces from '@/resources/group.js'
const nock = require ('nock');

describe("Testing recurses",()=>{

  const server =  nock('http://localhost:3000/api/').defaultReplyHeaders({'access-control-allow-origin':'*'});

//cuando ponemos export default del otro lado decidimos como nombrarlo 
// si ponemos const cuando lo exportamos cuando lo importamos tienen que llamarse tal cual

  it('get all groups', async () => {

    // la mejor forma de hacer el est, sin depender del backend
    // server.get("groups").replyWithFile(200, __dirname + '/replies/GetAllGroups.json');

    //tiene que ser con await si no el test pasa sin hacer las llmadas asicncronicas
     let response =  await groupsResorces.getAll();
     console.log(response);
     expect(response).toBeDefined();
     expect(response[0].Name).toEqual("family one");

  })

  it('get one group', async () => {

    let response =  await groupsResorces.getOneById(1);
    console.log(response);
    expect(response).toBeDefined();
    expect(response.Name).toEqual("family one");

 })


})
//logica de test