import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import { color } from "framer-motion";
import Adder from "@/components/arithmetic";
import Counter from "@/components/counter";
//import { Counter } from "@/components/counter";
//import { Adder } from "@/components/arithmetic";
export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>This is&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>Agile5&nbsp;</h1>
          <br />
          <h1 className={title()}>
            The entertainment website where Developers can be entertained.
          </h1>
          <h4 className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern Entertainment Web App.
          </h4>
          <h4 className={subtitle({ class: "mt-4" })}>
            Agile5 Entertainment is saving lives from boredom.
          </h4>

		 <br />		
		  <Counter />     <Adder />  
		  <br />
    <br />

      <br />

          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-md">Chess Community of Agile5</p>
                <p className="text-small text-default-500">Chess Community</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                Can not think of a line of code? Play a quick game of chess with
                a fellow Developer.
              </p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link isExternal showAnchorIcon href="https://www.chess.com/">
                Play Chess at Chess.com here.
              </Link>
            </CardFooter>
          </Card>    
      <br />
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Gordon Ramsay </TableCell>
          <TableCell>Student</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell> Keanu Reaves </TableCell>
          <TableCell>Technical Lead</TableCell>
          <TableCell>Paused</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Iron Man</TableCell>
          <TableCell>Senior Developer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>Thanos</TableCell>
          <TableCell>Community Manager</TableCell>
          <TableCell>Vacation</TableCell>
        </TableRow>
      </TableBody>
    </Table>



        </div>

        
      </section>
    </DefaultLayout>
  );
}
